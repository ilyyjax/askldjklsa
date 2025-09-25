const hairSelect = document.getElementById('hairSelect');
const hairColor = document.getElementById('hairColor');
const eyeColor = document.getElementById('eyeColor');
const mouthSelect = document.getElementById('mouthSelect');
const accessorySelect = document.getElementById('accessorySelect');

const hair = document.getElementById('hair');
const eyes = document.getElementById('eyes');
const mouth = document.getElementById('mouth');
const accessory = document.getElementById('accessory');

hairSelect.addEventListener('change', () => {
    const style = hairSelect.value;
    if (style === 'hair1') hair.style.borderRadius = '50% 50% 30% 30%';
    if (style === 'hair2') hair.style.borderRadius = '50% 50% 50% 50%';
    if (style === 'hair3') hair.style.borderRadius = '20% 80% 50% 50%';
});

hairColor.addEventListener('input', () => {
    hair.style.background = hairColor.value;
});

eyeColor.addEventListener('input', () => {
    const eyeEls = eyes.querySelectorAll('::before, ::after');
    eyes.style.setProperty('--eye-color', eyeColor.value);
    // Since pseudo-elements cannot be accessed in JS, use a trick:
    eyes.innerHTML = `<span style="width:20px;height:20px;background:${eyeColor.value};border-radius:50%;display:block;box-shadow:0 2px 5px rgba(0,0,0,0.2);"></span>
                      <span style="width:20px;height:20px;background:${eyeColor.value};border-radius:50%;display:block;box-shadow:0 2px 5px rgba(0,0,0,0.2);"></span>`;
});

mouthSelect.addEventListener('change', () => {
    const style = mouthSelect.value;
    if (style === 'mouth1') mouth.style.borderRadius = '10px'; // Smile
    if (style === 'mouth2') mouth.style.borderRadius = '50%';   // Neutral
    if (style === 'mouth3') mouth.style.borderRadius = '5px 5px 20px 20px'; // Frown
});

accessorySelect.addEventListener('change', () => {
    const style = accessorySelect.value;
    if (style === 'none') accessory.style.background = 'transparent';
    if (style === 'hat') accessory.style.background = '#ff6699';
    if (style === 'glasses') accessory.style.background = 'rgba(0,0,0,0.5)';
});
