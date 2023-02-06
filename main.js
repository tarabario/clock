const handSec = document.querySelector('.hand-sec');
const handMin = document.querySelector('.hand-min');
const handHour = document.querySelector('.hand-hour');
const allHand = document.querySelectorAll('.hand')



const ClockOn = () => {
	const now = new Date();
	const seconds = now.getSeconds();
	const minutes = now.getMinutes();
	const hours = now.getHours();

	const degSec = (seconds / 60) * 360 + 90;
	const degMin = (minutes / 60) * 360 + 90;
	const degHour = ((hours / 12) * 360 + 90) + (1/(12 * minutes));

	if (degSec === 0) {
		allHand.forEach(hand => hand.style.transition = 'none');
	} else {
		allHand.forEach(hand => hand.style.transition = 'all 0.05s');
	}

	handSec.style.transform = `rotate(${degSec}deg)`;
	handMin.style.transform = `rotate(${degMin}deg)`;
	handHour.style.transform = `rotate(${degHour}deg)`;
};

ClockOn();
setInterval(ClockOn, 1000);