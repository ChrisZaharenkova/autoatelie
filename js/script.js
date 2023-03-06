$(function(){
    $("#container1").twentytwenty({
  
    no_overlay: true,
    move_slider_on_hover: true,
    });
    
  });
  const anchors = document.querySelectorAll('a.scroll-to')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href')
    
    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}
const closeBlock = document.querySelector('.block__close')
const block = document.querySelector('.block')
const button = document.querySelector('.ful__button')
const closeBlockEnd = document.querySelector('.block-end__close')
const blockEnd = document.querySelector('.block-end')

button.addEventListener('click',function(){
    console.log("click")
    block.classList.add('open');
})
closeBlock.addEventListener('click',function(){
    console.log('close')
    block.classList.remove('open')
})
console.log('Init!');


// inputmask
const form = document.querySelector('.form');
const telSelector = form.querySelector('input[type="tel"]');
const inputMask = new Inputmask('+7 (999) 999-99-99');
inputMask.mask(telSelector);


new window.JustValidate('.form', {
  rules: {
    email:{
      required: false,   
    },
    name:{
      required:false,
    },
    tel: {
      required: false,
      /*
      function: () => {
        const phone = telSelector.inputmask.unmaskedvalue();
        return Number(phone) && phone.length === 10;
      }*/
    }
  },
  colorWrong: '#ff0f0f',
  messages: {
    name: {
      required: 'Введите имя',
      minLength: 'Введите 3 и более символов',
      maxLength: 'Запрещено вводить более 15 символов'
      
    },
    email: {
      email: 'Введите корректный email',
      required: 'Введите email'
    },
    tel: {
      required: 'Введите телефон',
     
    }
  },
  
  submitHandler: function(thisForm) {
    let formData = new FormData(thisForm);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log('Отправлено');
          //const apply = document.querySelector('.apply');
          blockEnd.classList.add('open');
          closeBlockEnd.addEventListener('click',function(){
            location.reload();
          })
        }
      }
    }

    xhr.open('POST', 'mail.php', true);
    xhr.send(formData);

    thisForm.reset();
  }
});
