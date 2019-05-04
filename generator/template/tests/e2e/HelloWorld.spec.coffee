<%_ if (hasCS) { _%>
import { Selector } from "testcafe"

fixture "test"
  .page "http://localhost:8080/#/"

<%_ if (hasElement) { _%>
buttonClick = Selector ".el-button.el-button--default"
test "click el-button", (t) =>
  await t
    .click(buttonClick)
<%_ } _%>

hrefClick = Selector "#app']"
test "click href", (t) =>
  await t
    .click(hrefClick)

<%_ } _%>
