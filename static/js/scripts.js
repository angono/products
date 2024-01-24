const categories = [
    {
        id: 1,
        name: 'Paper',
        items: [
            { image: '1.jpg', text: 'Printer paper', price: '$10.99' },
            { image: 'three_hole_paper.jpg', text: 'Three-hole punched paper', price: '$8.99' },
            { image: 'graph_paper.jpg', text: 'Graph paper', price: '$12.99' },
            { image: 'carbon_paper.jpg', text: 'Carbon paper', price: '$6.99' },
            { image: 'color_card_stock.jpg', text: 'Color card stock', price: '$14.99' },
            { image: 'heavy_duty_card_stock.jpg', text: 'Heavy-duty card stock', price: '$16.99' },
            { image: 'greeting_cards.jpg', text: 'Greeting cards and envelopes', price: '$19.99' },
            { image: 'tracing_paper.jpg', text: 'Tracing paper', price: '$9.99' }
        ]
    },
    {
        id: 2,
        name: 'Envelopes and Boxes',
        items: [
            { image: 'regular_envelopes.jpg', text: 'Regular envelopes (4 1/8 X 9 ½ inches)', price: '$5.99' },
            { image: 'legal_envelopes.jpg', text: 'Legal envelopes', price: '$7.99' },
            { image: 'padded_mailers.jpg', text: 'Padded legal envelope mailers', price: '$12.99' },
            { image: 'postage_stamps.jpg', text: 'Postage stamps', price: '$3.99' },
            { image: 'envelope_sealer.jpg', text: 'Envelope sealer', price: '$2.99' },
            { image: 'packaging_bubble.jpg', text: 'Packaging bubble', price: '$9.99' },
            { image: 'cardboard_boxes.jpg', text: 'Cardboard boxes (small, medium, large)', price: '$15.99 - $25.99' }
        ]
    },
    {
        id: 3,
        name: 'Office supply',
        items: [
            { image: 'stapler.jpg', text: 'Stapler', price: '$14.99' },
            { image: 'staples.jpg', text: 'Staples', price: '$2.99' },
            { image: 'stapler_remover.jpg', text: 'Stapler remover', price: '$5.99' },
            { image: 'scissors.jpg', text: 'Scissors', price: '$8.99' },
            { image: 'box_cutter.jpg', text: 'Box cutter', price: '$10.99' },
            { image: 'paper_clips.jpg', text: 'Paper clips (small, medium, large)', price: '$3.99 - $7.99' },
            { image: 'binder_clips.jpg', text: 'Binder clips (small, medium, large)', price: '$4.99 - $9.99' },
            { image: 'cellophane_tape.jpg', text: 'Clear cellophane tape', price: '$3.99' },
            { image: 'masking_tape.jpg', text: 'Masking tape', price: '$2.99' },
            { image: 'packing_tape.jpg', text: 'Packing tape', price: '$5.99' },
            { image: 'duct_tape.jpg', text: 'Duct tape', price: '$7.99' },
            { image: 'sticky_notes.jpg', text: 'Sticky notes (small, medium, large)', price: '$3.99 - $6.99' },
            { image: 'bookmark_flags.jpg', text: 'Bookmark sticky flags (small, medium, large)', price: '$2.99 - $5.99' },
            { image: 'bookmarks.jpg', text: 'Bookmarks', price: '$4.99' },
            { image: 'white_glue.jpg', text: 'White glue', price: '$3.99' },
            { image: 'rubber_cement.jpg', text: 'Rubber cement', price: '$4.99' },
            { image: 'wall_mount_gum.jpg', text: 'Tacky wall mount gum', price: '$6.99' },
            { image: 'hanging_hooks.jpg', text: 'Hanging hooks', price: '$1.99' },
            { image: 'magnifying_glass.jpg', text: 'Magnifying glass', price: '$12.99' }
        ]
    },
    {
        id: 4,
        name: 'Filing cabinet',
        items: [
            { image: 'manila_folders.jpg', text: 'Manila folders', price: '$9.99' },
            { image: 'hanging_folders.jpg', text: 'Hanging folders', price: '$12.99' },
            { image: 'folder_tabs.jpg', text: 'Folder tabs', price: '$2.99' }
        ]
    },
    {
        id: 5,
        name: 'Writing implements',
        items: [
            { image: 'pencils.jpg', text: 'Pencils', price: '$1.99' },
            { image: 'pencil_sharpener.jpg', text: 'Pencil sharpener', price: '$3.99' },
            { image: 'mechanical_pencils.jpg', text: 'Mechanical pencils', price: '$5.99' },
            { image: 'lead_refills.jpg', text: 'Mechanical pencil lead refills', price: '$2.99' },
            { image: 'erasers.jpg', text: 'Erasers', price: '$1.99' }
        ]
    },
    {
        id: 6,
        name: 'Notebooks and notepads',
        items: [
            { image: 'composition_notebooks.jpg', text: 'Composition notebooks', price: '$4.99' },
            { image: 'spiral_notebooks.jpg', text: 'Spiral-bound notebooks', price: '$6.99' },
            { image: 'legal_pads.jpg', text: 'Legal pads', price: '$3.99' }
        ]
    },
    {
        id: 7,
        name: 'Binder items',
        items: [
            { image: 'binders.jpg', text: 'Binders', price: '$7.99' },
            { image: 'binder_tabs.jpg', text: 'Binder tabs', price: '$2.99' },
            { image: 'binder_pockets.jpg', text: 'Binder pockets', price: '$3.99' },
            { image: 'document_holders.jpg', text: 'Clear binder document holders', price: '$5.99' },
            { image: 'hole_puncher.jpg', text: 'Single or three-hole puncher', price: '$8.99' }
        ]
    }
];


const categoriesContainer = document.getElementById('categories-container');
const itemsContainer = document.getElementById('items-container');

categories.forEach(category => {
    const categoryElement = document.createElement('a');
    categoryElement.classList.add('list-group-item', 'list-group-item-action', 'py-3');
    categoryElement.href = '#';
    categoryElement.textContent = category.name;
    categoryElement.addEventListener('click', () => showItems(category.items));
    categoriesContainer.appendChild(categoryElement);
});

function showItems(items) {
    itemsContainer.innerHTML = ''; // Clear previous items
    const tbody = document.getElementById('items-container');
    items.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img class="image-table" src="static/assets/${item.image}" alt="${item.text}"></td>
            <td>${item.text}</td>
            <td class="text-primary">${item.price}</td>
        `;
        tbody.appendChild(row);
    });
}