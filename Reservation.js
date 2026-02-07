// ================== TIME SLOT SELECTION ==================
function selectTime(element, time) {
  if (element.classList.contains('unavailable')) return;
  
  // Désélectionner tous les créneaux
  document.querySelectorAll('.time-slot').forEach(slot => {
    slot.classList.remove('selected');
  });
  
  // Sélectionner le créneau cliqué
  element.classList.add('selected');
  document.getElementById('selectedTime').value = time;
}

// ================== SET MIN DATE TO TODAY ==================
document.addEventListener('DOMContentLoaded', function() {
  const dateInput = document.getElementById('date');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
  }
});

// ================== FORM SUBMISSION ==================
function handleSubmit(event) {
  event.preventDefault();
  
  const selectedTime = document.getElementById('selectedTime').value;
  if (!selectedTime) {
    alert('Veuillez sélectionner un horaire');
    return;
  }
  
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  
  // Ici vous devriez normalement envoyer les données à un serveur
  console.log('Reservation data:', data);
  
  alert('Réservation confirmée ! Vous recevrez un email de confirmation.');
  event.target.reset();
  document.querySelectorAll('.time-slot').forEach(slot => {
    slot.classList.remove('selected');
  });
}
