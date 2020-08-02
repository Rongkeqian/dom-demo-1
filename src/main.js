// const div = dom.create("<div>newDiv</div>"); //document.createElement('div')没有封装的时候写法
// console.log(div);
// dom.after(test, div);

// const div3 = dom.create('<div id="parent"></div>');
// dom.wrap(test, div3);

// const nodes = dom.empty(window.empty);
// console.log(nodes);

// dom.attr(test, "title", "Hi,I am frank");
// const title = dom.attr(test, "title");
// console.log(`title:${title}`);

// dom.text(test, `你好，这是新的内容`);

// dom.style(test, { border: "1px solid red", color: "blue" });

// dom.class.add(test, "red");

// const fn = () => {
//   console.log("点击");
// };
// dom.on(test, "click", fn);
// dom.off(test, "click", fn);

// const s2 = dom.find("#s2")[0];
// console.log(dom.siblings(s2));
// console.log(dom.next(s2));

// const t = dom.find("#travel")[0];
// console.log(t);

// const s1 = dom.each(dom.children(t), (n) => dom.style(n, "color", "red"));
// console.log(s1);
const div = dom.find("#test>.red")[0]; // 获取对应的元素
//dom.style(div, "color", "red"); // 设置 div.style.color
dom.style(div, "color", "red");

const divList = dom.find(".red"); // 获取多个 div.red 元素
dom.each(divList, (n) => console.log(n)); // 遍历 divList 里的所有元素
