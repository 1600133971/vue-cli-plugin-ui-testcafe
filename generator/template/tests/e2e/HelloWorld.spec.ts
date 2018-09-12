<%_ if (hasTS) { _%>
import { Selector } from "testcafe";

fixture("test").page("http://localhost:8080/#/");

test("login", async t => {
  await t
    .click(Selector(".el-button.el-button--default"));
});

test("click href", async t => {
  await t
    .click(Selector("a[href='https://cli.vuejs.org']"));
});
<%_ } _%>
