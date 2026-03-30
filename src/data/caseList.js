// 直接导入图片，确保 Vite 能正确打包图片资源
import jiangxiAiShopCover from "../assets/images/cover/jiangxi-ai-shop.jpg";
import jiangxiAiShopDetail from "../assets/images/details/jiangxi-ai-shop.png";
import jiangxiTelecomCover from "../assets/images/cover/jiangxi-telecom-kowledgecloud.png";
import jiangxiTelecomDetail1 from "../assets/images/details/jiangxi-telecom-kowledgecloud_1.png";
import jiangxiTelecomDetail2 from "../assets/images/details/jiangxi-telecom-kowledgecloud_2.png";
import jiangxiTelecomDetail3 from "../assets/images/details/jiangxi-telecom-kowledgecloud_3.png";
import gcxnSmtDashboardCover from "../assets/images/cover/gcxn-smt-dashboard.png";

export const caseData = [
  {
    id: 1,
    title: "AI商城",
    type: "app",
    cover: jiangxiAiShopCover,
    detail: jiangxiAiShopDetail,
    demo: "https://fzx19980425.github.io/jiangxi-ai-shop/",
  },
  {
    id: 2,
    title: "电信知识云",
    type: "app",
    cover: jiangxiTelecomCover,
    detail: [
      jiangxiTelecomDetail1,
      jiangxiTelecomDetail2,
      jiangxiTelecomDetail3,
    ],
    demo: " https://fzx19980425.github.io/jiangxi-telecom-kowledgecloud/",
  },
  {
    id: 3,
    title: "国创新能SMT车间看板",
    type: "web",
    cover: gcxnSmtDashboardCover,
    detail: [gcxnSmtDashboardCover],
    demo: " https://fzx19980425.github.io/vue2-three-gcxn/",
  },
];
