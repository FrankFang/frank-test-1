import chai, { expect } from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";
import { mount } from "@vue/test-utils";
import Cascader from "@/cascader.vue";
chai.use(sinonChai);

let source = [
    {
        name: "浙江",
        children: [
            {
                name: "杭州",
                children: [{ name: "上城" }, { name: "下城" }, { name: "江干" }]
            },
            {
                name: "嘉兴",
                children: [{ name: "南湖" }, { name: "秀洲" }, { name: "嘉善" }]
            }
        ]
    },
    {
        name: "福建",
        children: [
            {
                name: "福州",
                children: [{ name: "鼓楼" }, { name: "台江" }, { name: "仓山" }]
            }
        ]
    },
    {
        name: "安徽",
        children: [
            {
                name: "合肥",
                children: [{ name: "瑶海" }, { name: "庐阳" }, { name: "仓山" }]
            }
        ]
    }
];

let selected = [];

describe("Cascader", () => {
    it("存在.", () => {
        expect(Cascader).to.be.ok;
    });

    it("可以设置popoverHeight.", () => {
        const wrapper = mount(Cascader, {
            attachToDocument: true,
            propsData: {
                source: source,
                selected: selected,
                popoverHeight: "201px"
            }
        });
        wrapper.find(".l-trigger").trigger("click");
        const popoverDom = wrapper.find(".popover").element;
        expect(getComputedStyle(popoverDom).height).to.equal("201px");
    });

    it("测试select值是否选中.", () => {
        const wrapper = mount(Cascader, {
            attachToDocument: true,
            propsData: {
                source: source,
                selected: selected,
                popoverHeight: "201px"
            }
        });
        const vm = wrapper.vm;
        vm.$el.querySelector(".l-trigger").click();
        console.log(vm.$el.outerHTML);
        vm.$el.querySelector(".l-label").click();
        console.log( vm.$el.outerHTML );
        /**
         * 这个跑不通
         */
    });
});
