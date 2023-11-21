const btn = document.querySelector('.sidebar-btn');
const closeBtn =  document.querySelector('.close-btn');
const sidebar =  document.querySelector('.sidebar');

function showSidebar () {
    if (sidebar.classList.contains('show-sidebar')) {
        sidebar.classList.remove('show-sidebar');
    }
    else {
        sidebar.classList.add('show-sidebar');
    }
}

function hideSidebar () {
    sidebar.classList.remove('show-sidebar');
}