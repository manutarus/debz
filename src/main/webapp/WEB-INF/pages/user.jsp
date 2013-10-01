<%@ taglib prefix="spring" uri="/WEB-INF/taglibs/spring.tld" %>
<%@ taglib prefix="c" uri="/WEB-INF/taglibs/c-rt.tld" %>
<html>
<body>
<c:if test="${not empty user.sid}">
    <h2>Edit Person</h2>
</c:if>

<c:if test="${empty user.sid}">
    <h2>Add Person</h2>
</c:if>

<spring:hasBindErrors name="user">
    Please fix the errors below
    <br />
</spring:hasBindErrors>
<form method="post">
    <fieldset>
        <table>
            <tr>
                <td>First name:</td>
                <td>
                    <spring:bind path="user.f_name">
                        <input type="text" name="${status.expression}" value="${status.value}" size="35" />
                        <c:if test="${status.errorMessage != ''}"><c:if test="${status.errorMessage != ''}"><span class="error">${status.errorMessage}</span></c:if></c:if>
                    </spring:bind>
                </td>
            </tr>
            <tr>
                <td>Other names:</td>
                <td>
                    <spring:bind path="user.o_name">
                        <input type="text" name="${status.expression}" value="${status.value}" size="35" />
                        <c:if test="${status.errorMessage != ''}"><c:if test="${status.errorMessage != ''}"><span class="error">${status.errorMessage}</span></c:if></c:if>
                    </spring:bind>
                </td>
            </tr>
            <tr>
                <td>usernames:</td>
                <td>
                    <spring:bind path="user.username">
                        <input type="text" name="${status.expression}" value="${status.value}" size="35" />
                        <c:if test="${status.errorMessage != ''}"><c:if test="${status.errorMessage != ''}"><span class="error">${status.errorMessage}</span></c:if></c:if>
                    </spring:bind>
                </td>
            </tr>
            <tr>
                <td>Password</td>
                <td valign="top">
                    <spring:bind path="user.password">
                        <input type="text" name="${status.expression}" value="${status.value}" size="10" />
                        <c:if test="${status.errorMessage != ''}"><c:if test="${status.errorMessage != ''}"><span class="error">${status.errorMessage}</span></c:if></c:if>
                    </spring:bind>
                </td>
            </tr>

            <tr>
                <td>Station</td>
                <td valign="top">
                    <spring:bind path="user.station">
                        <input type="text" name="${status.expression}" value="${status.value}" size="10" />
                        <c:if test="${status.errorMessage != ''}"><c:if test="${status.errorMessage != ''}"><span class="error">${status.errorMessage}</span></c:if></c:if>
                    </spring:bind>
                </td>
            </tr>  <tr>
                <td>Level</td>
                <td valign="top">
                    <spring:bind path="user.level">
                        <input type="text" name="${status.expression}" value="${status.value}" size="10" />
                        <c:if test="${status.errorMessage != ''}"><c:if test="${status.errorMessage != ''}"><span class="error">${status.errorMessage}</span></c:if></c:if>
                    </spring:bind>
                </td>
            </tr><td>Email</td>
                <td valign="top">
                    <spring:bind path="user.email">
                        <input type="text" name="${status.expression}" value="${status.value}" size="10" />
                        <c:if test="${status.errorMessage != ''}"><c:if test="${status.errorMessage != ''}"><span class="error">${status.errorMessage}</span></c:if></c:if>
                    </spring:bind>
                </td>
            </tr>

        </table>
        <br />

        <input type="submit" value="Save" name="save">

    </fieldset>
</form>

</body>
</html>