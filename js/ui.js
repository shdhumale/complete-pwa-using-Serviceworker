document.addEventListener('DOMContentLoaded', function () {
  // nav menu to show menu.
  const menus = document.querySelectorAll('.side-menu');
  M.Sidenav.init(menus, { edge: 'right' });
  // add user form
  const forms = document.querySelectorAll('.side-form');
  M.Sidenav.init(forms, { edge: 'left' });
});