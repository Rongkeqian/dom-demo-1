/*三种写法
window.dom = {
  create: function () {},
};
window.dom = {
    create(){

    }
}
dom.create = function () {};
*/
//
// window.dom = {
//   create(tagName) {
//     //封装创建标签的
//     return document.createElement(tagName);
//   },
// };

//创建<div><span>1</span></div>多个源的
/*window.dom = {
  create(string) {
    const container = document.createElement("div"); //把div改为template可以容纳任何元素
    container.innerHTML = string;
    return container.children[0];
  },
};*/
//创建tr,td
window.dom = {
  create(string) {
    const container = document.createElement("template"); //把div改为template可以容纳任何元素
    container.innerHTML = string.trim(); //trim把字符串两边的空格去掉
    return container.content.firstChild;
  },
  after(node, node2) {
    console.log(node.nextSibling);
    node.parentNode.insertBefore(node2, node.nextSibling);
  },
  before(node, node2) {
    node.parentNode.insertBefore(node2, node);
  },
  append(parent, node) {
    parent.appendChild(node);
  },
  wrap(node, parent) {
    dom.before(node, parent);
    dom.append(parent, node);
  },
  //删除
  remove(node) {
    node.parentNode.removeChild(node);
    return node;
  },
  empty(node) {
    const { childNodes } = node;
    const array = [];
    let x = node.firstChild;
    while (x) {
      array.push(dom.remove(node.firstChild));
      x = node.firstChild;
    }
    return array;
  },
  attr(node, name, value) {
    //重载 根据不同的参数写不同的代码
    if (arguments.length === 3) {
      node.setAttribute(name, value);
    } else if (arguments.length === 2) {
      return node.getAttribute(name);
    }
  },
  text(node, string) {
    //适配
    if (arguments.length === 2) {
      if ("innerText" in node) {
        node.innerText = string; //ie
      } else {
        node.textContent = string; //firefox/chrome
      }
    } else if (arguments.length === 1) {
      if ("innerText" in node) {
        return (node.innerText = string); //ie
      } else {
        return (node.textContent = string); //firefox/chrome
      }
    }
  },
  html(node, string) {
    if (arguments.length === 2) {
      node.innerHTML = string;
    } else if (arguments.length === 1) {
      return node.innerHTML;
    }
  },
  style(node, name, value) {
    if (arguments.length === 3) {
      // dom.style(div, 'color', 'red')
      node.style[name] = value;
    } else if (arguments.length === 2) {
      if (typeof name === "string") {
        // dom.style(div, 'color')
        return node.style[name];
      } else if (name instanceof Object) {
        // dom.style(div, {color: 'red'})
        const object = name;
        for (let key in object) {
          node.style[key] = object[key];
        }
      }
    }
  },
  class: {
    add(node, className) {
      node.classList.add(className);
    },
    remove(node, className) {
      node.classList.remove(className);
    },
    has(node, className) {
      return node.classList.contains(className);
    },
  },
  on(node, eventName, fn) {
    node.addEventListener(eventName, fn);
  },
  off(node, eventName, fn) {
    node.removeEventListener(eventName, fn);
  },
  //查
  find(selector, scope) {
    let x = scope || document.querySelectorAll(selector);
    return x;
    //return (scope || document.querySelectorAll(selector))
  },
  parent(node) {
    return node.parentNode;
  },
  children(node) {
    return node.children;
  },
  siblings(node) {
    return Array.from(node.parentNode.children).filter((n) => n !== node);
  },
  next(node) {
    let x = node.nextSibling;
    while (x && x.nodeType === 3) {
      x = x.nextSibling;
    }
    return x;
  },
  previous(node) {
    let x = node.previousSiblings;
    while (x && x.nodeType === 3) {
      x = x.previousSiblings;
    }
    return x;
  },
  each(nodeList, fn) {
    for (let i = 0; i < nodeList.length; i++) {
      fn.call(null, nodeList[i]);
    }
  },
  index(node) {
    const list = dom.children(node.parentNode);
    for (let i = 0; i < list.length; i++) {
      if (list[i] === node) {
        break;
      }
    }
    return;
  },
};
