define(["tau/core/templates-factory"],function(templates){var config={name:"list-grid-entity__row_relation",markup:["",'<tr class="i-item-${id}{{if hasValidEntityState && entityState.isFinal}} tau-list__table__row_isfinalstate_true{{/if}}">',"   <td>",'       <div class="tau-relation-type">','           <span runas="property.relationType" data-context:general:id="${relationId}" data-context:general:entity-type:name="${relationType}">${relationType.name}</span>',"       </div>","   </td>",'   <td class="tau-entity-id">','       <a class="tau-entitylink" href="#${__type.toLowerCase()}/${id}" title="${name}">','           <em class="ui-type-icon ui-type-icon-${__type.toLowerCase()}">${id}</em>',"       </a>","   </td>",'   <td class="tau-entity-name"><span>${name}</span></td>',"   <td><span>${project}</span></td>","{{if hasValidEntityState}}","   <td>",'       <div runas="property.entityState" data-context:general:id="${id}" data-context:general:entity-type:name="${__type}">${entityState.name}</div>',"   </td>","{{else}}","   <td><span>${status}</span></td>","{{/if}}","   <td><span>${release}</span></td>","   <td><span>${iteration}</span></td>","   <td>",'       <button class="tau-btn tau-attention i-role-action-detach" type="button" data-relation-id="${relationId}">Remove</button>',"   </td>","</tr>"]};return templates.register(config)})