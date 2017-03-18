$(document).ready(function(){
  
  var snackbarContainer = document.querySelector('#demo-toast-example');
    
  var dialog = document.querySelector('.mdl-dialog');
  var showModalButton = document.querySelector('#add');
  if (! dialog.showModal) {
    dialogPolyfill.registerDialog(dialog);
  }
  showModalButton.addEventListener('click', function() {
    document.getElementById('bookmarkUrl').value = 'Paste site url';
    dialog.showModal();
  });
  dialog.querySelector('.close').addEventListener('click', function() {
    dialog.close();
  });

  dialog.querySelector('.add-bookmark').addEventListener('click', function(){
   document.getElementById('addBookmarkForm').submit();
  });
});