<%_ if (!hasTS) { _%>
import { Selector } from "testcafe";

fixture("test").page("http://localhost:8080/#/");

test("click el-button", async t => {
  await t
    .click(Selector(".el-button.el-button--default"));
});

test("click href", async t => {
  await t
    .click(Selector("#app"));
});
<%_ } _%>
