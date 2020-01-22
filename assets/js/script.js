
animateCSS('#cappuccino', 'slideInLeft');
animateCSS('#chocpeanut', 'slideInLeft');
animateCSS('#almond', 'slideInLeft');
animateCSS('#blackwidow', 'slideInLeft');
animateCSS('#cinnamon', 'slideInLeft');

function animateCSS(element, animationName, callback) {
    const node = document.querySelector(element)
    node.classList.add('animated', animationName)

    function handleAnimationEnd() {
        node.classList.remove('animated', animationName)
        node.removeEventListener('animationend', handleAnimationEnd)

        if (typeof callback === 'function') callback()
    }

    node.addEventListener('animationend', handleAnimationEnd)
};

$('#flavorModal').on('show.bs.modal', function (event) {

    const flav_name_AlmondEnjoy = "Almond Enjoy";
    const flav_name_BlackWidow = "Black Widow";
    const flav_name_ChocolateCappuccino = "Chocolate Cappuccino";
    const flav_name_ChocolatePeanutButter = "Chocolate Peanut Butter";
    const flav_name_GasLightCinnamon = "Gas Light Cinnamon";

    const flav_desc_AlmondEnjoy = "Dare to enjoy the taste of mouth-watering chocolate, rich and delectable coconut combined with roasted almonds. It's like a candy bar in a bottle, with just the right balance of everything.";
    const flav_desc_BlackWidow = "It has a spicy herbal flavor with a slight smokiness. A nose of cloves, cinnamon and ginger with hints of allspice. At 107 proof, Black Widow is one powerful drink.";
    const flav_desc_ChocolateCappuccino = "Chocolate Cappuccino provides a balanced blend of delicate coffee, light cinnamon and aromatic cocoa to create an enticing, robust flavor.";
    const flav_desc_ChocolatePeanutButter = "Sinfully decadent chocolate blended with savory peanut butter. What an amazing combination!";
    const flav_desc_GasLightCinnamon = "It is wonderfully fascinating and reminiscent of the warm sun on your face as a cool breeze carries the scent of a West Indies spice market.";

    const img_flav_AlmondEnjoy = "./assets/images/label_almond.jpg";
    const img_flav_BlackWidow = "./assets/images/label_blackwidow.jpg";
    const img_flav_ChocolateCappuccino = "./assets/images/label_cappuccino.jpg";
    const img_flav_ChocolatePeanutButter = "./assets/images/label_chocpeanut.jpg";
    const img_flav_GasLightCinnamon = "./assets/images/label_cinnamon.jpg";

    let button = $(event.relatedTarget) // Button that triggered the modal
    let flavor = button.data('flavor') // Extract info from data-* attributes
    let flavorName = "";
    let proof = "70 Proof";
    let label = "";


    switch (flavor) {
        case "cappuccino":
            flavorName = flav_name_ChocolateCappuccino;
            flavorDesc = flav_desc_ChocolateCappuccino;
            label = img_flav_ChocolateCappuccino;
            break;
        case "chocpeanut":
            flavorName = flav_name_ChocolatePeanutButter;
            flavorDesc = flav_desc_ChocolatePeanutButter;
            label = img_flav_ChocolatePeanutButter;
            break;
        case "almond":
            flavorName = flav_name_AlmondEnjoy;
            flavorDesc = flav_desc_AlmondEnjoy;
            label = img_flav_AlmondEnjoy;
            break;
        case "blackwidow":
            flavorName = flav_name_BlackWidow;
            flavorDesc = flav_desc_BlackWidow;
            label = img_flav_BlackWidow;
            proof = "107 Proof";
            break;
        case "cinnamon":
            flavorName = flav_name_GasLightCinnamon;
            flavorDesc = flav_desc_GasLightCinnamon;
            label = img_flav_GasLightCinnamon;
            break;
        
        default:
            break;
    }
    
    // Update the modal's content. 
    var modal = $(this)
    modal.find('#flavor-name').text(flavorName);
    modal.find('#flavor-proof').text(proof);
    modal.find('#flavor-desc').text(flavorDesc);
    modal.find('#flavor-label').attr('src', label);
});