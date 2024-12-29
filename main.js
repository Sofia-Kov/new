const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const image = document.querySelector(".image");

yesBtn.addEventListener("click", () => {
    console.log(1)
    question.innerHTML = "i love you too";
    image.src = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2FhZHFwbnI3OWlocmxqOTZodG85eG1qOTNteHlhc3VpNGZocWI4NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/hapksuDhRmbU4/giphy.gif";
});

noBtn.addEventListener("mouseover", () => {
    const wrapper = document.querySelector(".wrapper");
    const wrapperRect = wrapper.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();

    const maxX = wrapperRect.width - noBtnRect.width;
    const maxY = wrapperRect.height - noBtnRect.height;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.position = "absolute"; 
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});