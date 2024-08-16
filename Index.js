var menuLinks = [
    { text: 'about', href: '/about' },
    {
        text: 'catalog', href: '#', subLinks: [
            { text: 'all', href: '/catalog/all' },
            { text: 'top selling', href: '/catalog/top' },
            { text: 'search', href: '/catalog/search' }
        ]
    },
    {
        text: 'orders', href: '#', subLinks: [
            { text: 'new', href: '/orders/new' },
            { text: 'pending', href: '/orders/pending' },
            { text: 'history', href: '/orders/history' }
        ]
    },
    {
        text: 'account', href: '#', subLinks: [
            { text: 'profile', href: '/account/profile' },
            { text: 'sign out', href: '/account/signout' }
        ]
    }
];

const mainEl = document.querySelector('main');

// Step 2: Apply background color
mainEl.style.backgroundColor = 'var(--main-bg)';

// Step 3: Add h1
mainEl.innerHTML = '<h1> DOM Manipulation</h1>';

// Step 4: Add flex class list
mainEl.setAttribute('class', 'flex-ctr');

// Part 2: Top Menu Setup
const topMenuEl = document.getElementById('top-menu');
// Set the height of the topMenuEl element to be 100%
topMenuEl.style.height = '100%';
// Set the background color of topMenuEl
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
// Set flex to topMenu
topMenuEl.setAttribute('class', 'flex-around');

// Adding the menuLinks to the topMenuEl
menuLinks.forEach(link => {
    const a = document.createElement('a');
    a.setAttribute('href', link.href);
    a.textContent = link.text;
    topMenuEl.appendChild(a);
});

// Part 3: Submenu Setup
const subMenuEl = document.getElementById('sub-menu');
subMenuEl.style.height = '100%';
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
subMenuEl.setAttribute('class', 'flex-around');
subMenuEl.style.position = 'absolute';
subMenuEl.style.top = '0';

 
const topMenuLinks = document.querySelectorAll('#top-menu a');

 
topMenuEl.addEventListener('click', function (e) {
    e.preventDefault();

    if (!e.target.matches('a')) return;

    console.log(e.target.textContent);

     
    e.target.classList.toggle('active');

     
    topMenuLinks.forEach(link => {
        if (link !== e.target) {
            link.classList.remove('active');
        }
    });

     
    const clickedLink = menuLinks.find(link => link.text === e.target.textContent);

    // submenu  
    if (e.target.classList.contains('active') && clickedLink.subLinks) {
        subMenuEl.style.top = '100%';
        buildSubMenu(clickedLink.subLinks);
    } else {
        subMenuEl.style.top = '0';
    }
});

// Function to build the submenu
function buildSubMenu(subLinks) {
    subMenuEl.innerHTML = '';
    subLinks.forEach(link => {
        const a = document.createElement('a');
        a.setAttribute('href', link.href);
        a.textContent = link.text;
        subMenuEl.appendChild(a);
    });
}

// Part 5 
subMenuEl.addEventListener('click', function (e) {
    e.preventDefault();

    if (!e.target.matches('a')) return;

    console.log(e.target.textContent);

    subMenuEl.style.top = '0';

    topMenuLinks.forEach(link => {
        link.classList.remove('active');
    });

     
    if (e.target.textContent === "about") {
        mainEl.innerHTML = `<h1>About</h1>`;
    } else {
        mainEl.innerHTML = `<h1>${e.target.textContent}</h1>`;
    }
});
