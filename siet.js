function scrollProducts(direction) {
    const container = document.querySelector('.product-scroll-container');
    const scrollAmount = 300; 

    if (direction === 'left') {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else if (direction === 'right') {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
}
function openOrderForm() {
    const modal = document.getElementById('orderForm');
    modal.style.display = 'flex';
    setTimeout(() => {
        modal.style.opacity = '1';
    }, 10);
}
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.opacity = '0';
    setTimeout(() => {
        modal.style.display = 'none';
    }, 500);
}
document.getElementById('orderDetails').addEventListener('submit', function (e) {
    e.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;


    console.log('Замовлення:', { firstName, lastName, phone, email });

    alert('Ваше замовлення прийнято!');
    closeModal('orderForm');
});
function navigateToCatalog() {
    const catalogSection = document.getElementById('catalog');
    catalogSection.scrollIntoView({ behavior: 'smooth' });
}
function togglePanel() {
    const panel = document.getElementById('side-panel');
    panel.classList.toggle('open');
}

function navigateTo(event, target) {
    event.preventDefault();
    const section = document.querySelector(target);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
    togglePanel();
}

function showModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'flex';
    setTimeout(() => {
        modal.style.opacity = '1';
    }, 10);
}


function filterProducts() {
    const query = document.getElementById('search').value.toLowerCase();
    const products = document.querySelectorAll('.product-ad');
    const productList = document.querySelector('.product-list');

    let matchedProducts = [];

    products.forEach(product => {
        const name = product.dataset.name.toLowerCase();
        if (name.includes(query)) {
            product.classList.remove('hidden');
            product.classList.add('moving');
            productList.prepend(product);
            setTimeout(() => {
                product.classList.remove('moving');
        }, 500);
        } else {
            product.classList.add('hidden');
        }
    });

    matchedProducts.forEach(product => {
        productList.prepend(product);
    });
}

function clearSearch() {
    const searchInput = document.getElementById('search');
    searchInput.value = '';
    const products = document.querySelectorAll('.product-ad');
    products.forEach(product => {
        product.classList.remove('hidden');
    });
}
function toggleExpand() {
    const scrollContainer = document.querySelector('.product-scroll-container');
    const productList = document.querySelector('.product-list');
    const expandButton = document.querySelector('.expand-button');

    scrollContainer.classList.toggle('expanded');
    productList.classList.toggle('expanded');

    if (scrollContainer.classList.contains('expanded')) {
        expandButton.textContent = 'Сховати піньяти';
    } else {
        expandButton.textContent = 'Показати всі піньяти';
    }
}