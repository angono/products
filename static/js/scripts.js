const categories = [
    {
        id: 1,
        name: 'Paper',
        items: [
            { image: 'printer_paper.jpg', text: 'Printer paper. 500 Sheets, A4', price: 'UGX 24,000' },
            { image: 'three_hole_paper.jpg', text: 'Three-hole punched paper. 8-1/2 x 11 Inches, Yellow, 100 Sheets', price: 'UGX 85885' },
            { image: 'graph_paper.jpg', text: 'Graph paper', price: 'UGX 22,000' },
            { image: 'carbon_paper.jpg', text: 'Carbon paper. 1 pkt, 100 Sheets, A4', price: 'UGX 15,000' },
            { image: 'color_card_stock.jpg', text: 'Color card stock', price: 'USh 35,000' },
            { image: 'heavy_duty_card_stock.jpg', text: 'Heavy-duty card stock', price: '$16.99' },
            { image: 'greeting_cards.jpg', text: 'Greeting cards and envelopes', price: '$19.99' },
            { image: 'tracing_paper.jpg', text: 'Tracing paper', price: 'UGX 19,000' }
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
            { image: 'envelope_sealer.jpg', text: 'Envelope sealer, A5, Self Seal, 50pcs per packet', price: 'UGX 9,000' },
            { image: 'packaging_bubble.jpg', text: 'Packaging bubble', price: '$9.99' },
            { image: 'cardboard_boxes.jpg', text: 'Cardboard boxes (small, medium, large)', price: '$15.99 - $25.99' }
        ]
    },
    {
        id: 3,
        name: 'Office supply',
        items: [
            { image: 'stapler.jpg', text: 'Stapler', price: 'USh 42,000' },
            { image: 'staples.jpg', text: 'Staples', price: 'USh 7,500' },
            { image: 'stapler_remover.jpg', text: 'Stapler remover', price: 'UGX 4,000' },
            { image: 'scissors.jpg', text: 'Scissors', price: 'UGX 9,000' },
            { image: 'box_cutter.jpg', text: 'Box cutter', price: 'UGX 4,000' },
            { image: 'paper_clips.jpg', text: 'Paper clips (small, medium, large)', price: 'UGX 3,000' },
            { image: 'binder_clips.jpg', text: 'Binder clips (small, medium, large)', price: 'UGX 10,000' },
            { image: 'cellophane_tape.jpg', text: 'Clear cellophane tape', price: 'UGX 4,500' },
            { image: 'masking_tape.jpg', text: 'Masking tape', price: 'UGX 4,500' },
            { image: 'packing_tape.jpg', text: 'Packing tape', price: 'USh 15,000' },
            { image: 'duct_tape.jpg', text: 'Duct tape', price: '$7.99' },
            { image: 'sticky_notes.jpg', text: 'Sticky notes (small, medium, large)', price: '$3.99 - $6.99' },
            { image: 'bookmark_flags.jpg', text: 'Bookmark sticky flags (small, medium, large)', price: '$2.99 - $5.99' },
            { image: 'bookmarks.jpg', text: 'Bookmarks', price: '$4.99' },
            { image: 'white_glue.jpg', text: 'White glue', price: 'USh 45,000' },
            { image: 'rubber_cement.jpg', text: 'Rubber cement', price: 'UGX 54703' },
            { image: 'wall_mount_gum.jpg', text: 'Tacky wall mount gum', price: '$6.99' },
            { image: 'hanging_hooks.jpg', text: 'Hanging hooks', price: '$1.99' },
            { image: 'magnifying_glass.jpg', text: 'Magnifying glass', price: '$12.99' }
        ]
    },
    {
        id: 4,
        name: 'Filing cabinet',
        items: [
            { image: 'manila_folders.jpg', text: 'Manila folders', price: 'USh 165,000 - 280,000' },
            { image: 'hanging_folders.jpg', text: 'Hanging folders', price: 'USh 25,000' },
            { image: 'folder_tabs.jpg', text: 'Folder tabs', price: 'USh 30,500' }
        ]
    },
    {
        id: 5,
        name: 'Writing implements',
        items: [
            { image: 'pencils.jpg', text: 'Pencils', price: 'UGX 4,000' },
            { image: 'pencil_sharpener.jpg', text: 'Pencil sharpener', price: 'USh 35,000' },
            { image: 'mechanical_pencils.jpg', text: 'Mechanical pencils', price: 'UGX 12,000' },
            { image: 'lead_refills.jpg', text: 'Mechanical pencil lead refills', price: '$2.99' },
            { image: 'erasers.jpg', text: 'Erasers', price: 'UGX 48247' }
        ]
    },
    {
        id: 6,
        name: 'Notebooks and notepads',
        items: [
            { image: 'composition_notebooks.jpg', text: 'Composition notebooks', price: 'USh 20,000' },
            { image: 'spiral_notebooks.jpg', text: 'Spiral-bound notebooks. A4 Side, 70 Sheets', price: 'UGX 4,000' },
            { image: 'legal_pads.jpg', text: 'Legal pads', price: 'USh 65,000' }
        ]
    },
    {
        id: 7,
        name: 'Binder items',
        items: [
            { image: 'binders.jpg', text: 'Binders', price: 'USh 6,000' },
            { image: 'binder_tabs.jpg', text: 'Binder tabs', price: '$2.99' },
            { image: 'binder_pockets.jpg', text: 'Binder pockets', price: 'UGX 19,000' },
            { image: 'document_holders.jpg', text: 'Clear binder document holders', price: '$5.99' },
            { image: 'hole_puncher.jpg', text: 'Single or three-hole puncher', price: '$8.99' }
        ]
    }
];

const categoriesContainer = document.getElementById('categories-container');
const itemsContainer = document.getElementById('items-container');
const imageModal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');

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
        const imageCell = document.createElement('td');
        const itemCell = document.createElement('td');
        const priceCell = document.createElement('td');

        // Create a clickable image
        const imageElement = document.createElement('img');
        imageElement.src = `static/assets/${item.image}`;
        imageElement.alt = item.text;
        imageElement.classList.add('image-table', 'border', 'img-thumbnail', 'img-clickable');
        imageElement.addEventListener('click', () => showImageInModal(`static/assets/${item.image}`));

        // Apply styles to cells
        // imageCell.style.verticalAlign = 'baseline'; // Adjust vertical alignment if needed
        priceCell.style.color = '#0d6efd'; // Example: Set the text color to blue

        // Create other cells
        itemCell.textContent = item.text;
        priceCell.textContent = item.price;

        // Append cells to the row
        imageCell.appendChild(imageElement);
        row.appendChild(imageCell);
        row.appendChild(itemCell);
        row.appendChild(priceCell);

        // Append the row to the table body
        tbody.appendChild(row);
    });
}



function showImageInModal(imageSrc) {
    modalImage.src = imageSrc;
    $('#imageModal').modal('show');
}