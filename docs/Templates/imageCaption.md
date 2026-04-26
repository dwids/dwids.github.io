
<%*
const url = await tp.system.prompt("Image URL");
const caption = await tp.system.prompt("Caption");
%>
<figure>
  <img src="<% url %>" alt="<% caption %>">
  <figcaption><% caption %></figcaption>
</figure>
