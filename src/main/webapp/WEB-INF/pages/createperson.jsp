<%@ taglib prefix="spring" uri="/WEB-INF/taglibs/spring.tld" %>
<%@ taglib prefix="c" uri="/WEB-INF/taglibs/c-rt.tld" %>
<html>
<body>
<c:if test="${not empty person.id}">
    <h2>Edit Person</h2>
</c:if>

<c:if test="${empty person.id}">
    <h2>Add Person</h2>
</c:if>

    <spring:hasBindErrors name="person">
        Please fix the errors below
        <br />
    </spring:hasBindErrors>
    <form method="post">
        <fieldset>
            <table>
                <tr>
                    <td>Name:</td>
                    <td>
                        <spring:bind path="person.names">
                            <input type="text" name="${status.expression}" value="${status.value}" size="35" />
                            <c:if test="${status.errorMessage != ''}"><c:if test="${status.errorMessage != ''}"><span class="error">${status.errorMessage}</span></c:if></c:if>
                        </spring:bind>
                    </td>
                </tr>
                <tr>
                    <td valign="top">Gender:</td>
                    <td valign="top">
                        <spring:bind path="person.gender">
                            <select name="${status.expression}">
                                <option>Male</option>
                                <option>Female</option>
                        </spring:bind>
                    </td>
                </tr>
                <tr>
                    <td valign="top">DOB</td>
                    <td valign="top">
                        <spring:bind path="person.dob">
                            <input type="text" name="${status.expression}" value="${status.value}" size="10" />
                            <c:if test="${status.errorMessage != ''}"><c:if test="${status.errorMessage != ''}"><span class="error">${status.errorMessage}</span></c:if></c:if>
                        </spring:bind>
                    </td>
                </tr>


                    <tr>
                        <td>Occupation</td>
                        <td valign="top">
                            <spring:bind path="person.occupation">
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