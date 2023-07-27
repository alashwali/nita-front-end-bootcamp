const DBName = "AppointmentDB";
let DB;
function InitIndexedDB() {
  const request = window.indexedDB.open(DBName, 1);
  request.onerror = (event) => {
    console.log("Error creation/ accessing DB");
  };
  request.onsuccess = (event) => {
    DB = event.target.result;
    LoadAppointments();
  };
  request.onupgradeneeded = (event) => {
    DB = event.target.result;
    DB.createObjectStore("Appointments", { autoIncrement: true });
  };
}
function AddAppointment(appointment) {
  const transaction = DB.transaction(["Appointments"], "readwrite");
  const AppointmentStore = transaction.objectStore("Appointments");
  const request = AppointmentStore.add(appointment);
  request.onsuccess = () => {
    LoadAppointments();
  };
  transaction.onComplete = () => {
    DB.close();
  };
}
function LoadAppointments() {
  const AppointmentList = document.getElementById("Appointment");
  AppointmentList.innerHTML = "";

  const ObjectStore =
    DB.transaction("Appointments").objectStore("Appointments");
  ObjectStore.openCursor().onsuccess = (event) => {
    const cursor = event.target.result;
    if (cursor) {
      const Appointment = cursor.value;
      const AppointmentItem = document.createElement("li");
      AppointmentItem.className = "list-group-item";
      AppointmentItem.textContent = `${Appointment.Name}-${Appointment.Date}-${Appointment.Time}-${Appointment.Problem}`;
      AppointmentList.appendChild(AppointmentItem);
      cursor.continue();
    }
  };
}
$("#AppointmentForm").submit(function (e) {
  e.preventDefault();
  const Name = $("#name").value;
  const Date = $("#date").value;
  const Time = $("#time").value;
  const Problem = $("#problem").value;
  const Appointment = { Name, Date, Time, Problem };
  AddAppointment(Appointment);
  $("#name").val("");
  $("#date").val("");
  $("#time").val("");
  $("#problem").val("");
});
InitIndexedDB();
