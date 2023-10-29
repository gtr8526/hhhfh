"use strict"
const elems = document.querySelectorAll('.lesson_item_sub-list');
for (let elem of elems) {
if (elem.matches('[class$="lesson_item-list_red"]')) {
        console.log('красныи');
    } else if (elem.matches('[class$="lesson_item-list_blue"]')){
        console.log('синий');
    }
}
const textElement =document.querySelector('.lesson_text');
const textElementContent = textElement.innerHTML;
console.log(textElementContent);
textElement.innerHTML =
 `<p>${textElementContent}</p> <p>живи а работай в
 <span class="blue">свободное</span>время!</p>`;
 console.log(textElement.innerHTML);
const textelement1 = document.querySelector(".lesson_text1");
 const textelement = textElement.outerHTML;
console.log(textelement1);
textElement.outerHTML =`<p>живи а работай в <span class="yelow"> свободное</span>время</p>`;
console.log(textElement.outerHTML);
const textElement3 =document.querySelector(".lesson_text2");
const textElementContent1 = textElement.textContent;
console.log(textElementContent);
textElement.textContent =`<p>живи а работай в
 <spana class="yellow"> свободное </spana>время</p>`;
console.log(textElement.textContent);
const textElement4 = document.querySelector('.lesson_text2');
const getComment = textElement4.nextElementSibling;
console.log(getComment);
const nextElement = document.createElement('div');
nextElement.innerHTML = `живи а работай в<span class="yellow">свободное</span>время`;
console.log(nextElement);
const newText = document.createTextNode('ПРИВЕТ');
console.log(newText);
const lessonBlock = document.querySelector('.lesson');
const title = document.querySelector('h3');
lessonBlock.append(title);
const textElement1 = document.querySelector('.lesson');
const cloneTextElement = textElement1.cloneNode(true);
const lessonBlock1 = document.querySelector('.lesson');
lessonBlock.append(cloneTextElement);
const element = document.querySelector('.lesson_item-list_red');
element.classList.add('red');
console.log(`red pro`);
const element1 = document.querySelector('.lesson_item-list_red');
element1.style.cssText =`
   margin-botton: 30px;
   color:red
`;
const element2 = document.querySelector('.lesson_item-list_red');
console.log(element1.style.fontSize);
const elementStyle = getComputedStyle(element);
console.log(elementStyle.fontSize);
const elementBeforeStyle = getComputedStyle(element, "::before");
console.log(elementBeforeStyle.backgroundColor);
const element3 = document.querySelector('.lesson_item-list_red');
const elementStyle1 = getComputedStyle(element);
console.log(elementStyle.paddingLeft);
const paddingLeft = parseInt(elementStyle.paddingLeft);
console.log(paddingLeft);
element.style.marginLeft = 20;
const link = document.querySelector('.lesson_link');
const input = document.querySelector('.lesson_input');
console.log(link.href);
console.log(input.value);
console.dir(link);
const lessonText = document.querySelector('.lesson_text2');
lessonText.setAttribute('some-attribute','some-value');
if (lessonText.hasAttribute('some-attribute')){
    console.log('some-attribute существует!');
}
const input1 =document.querySelector('.lesson_input');
input.setAttribute('id','123');
console.log(input1.id);
input1.id ="321";
console.log(input.getAttribute('id'));