<%_ if (!hasTS) { _%>
import { Selector } from "testcafe";

fixture("test").page("http://localhost:8080/#/");

<%_ if (hasElement) { _%>
test("click el-button", async t => {
  await t
    .click(Selector(".el-button.el-button--default"));
});
<%_ } _%>

test("click href", async t => {
  await t
    .click(Selector("#app"));
});
<%_ } _%>
