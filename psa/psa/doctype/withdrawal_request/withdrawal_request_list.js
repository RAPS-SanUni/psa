frappe.listview_settings["Withdrawal Request"] = {
  onload(listview) {
    // var get_all_list_items = listview.data;
    // var get_checked_list_items = listview.get_checked_items();
    // var get_checked_list_items_names = listview.get_checked_items(true);

    listview.page.actions.find(`[data-label='Edit']`).parent().parent().remove();

    //Code to hide the sidebar
    // $(".layout-side-section").remove();
    // $(".sidebar-toggle-placeholder").remove();

    listview.page.add_inner_button(__("Documentation"), function() {
      window.location.href = "/psa/طلب-الانسحاب";
      // window.open("/psa/طلب-الانسحاب", "_blank");
    });

    /////////////////////->>>>>> Uncomment it
    // listview.page.wrapper.on('change', 'input[type="checkbox"]', function () {
    //     listview.page.actions.find(`[data-label='Delete']`).parent().parent().show();

    //     var checked_items = listview.get_checked_items();
    //     checked_items.forEach(item => {
    //         if (item.status.includes("Approv") || item.status.includes("Reject")) {
    //             listview.page.actions.find(`[data-label='Delete']`).parent().parent().hide();
    //         }
    //     });
    // });

    // if(frappe.user_roles.includes("Student")) {
    //     listview.page.add_inner_button(__("Get Code for Fee Payment"), function () {
    //         var checked_item = listview.get_checked_items(true);
    //         if (checked_item.length == 0) {
    //             frappe.msgprint({
    //                 "message" : __("No row selected!"),
    //                 "indicator" : "red"
    //             });
    //         }
    //         else if (checked_item.length == 1) {
    //             frappe.msgprint(__("Payment code for '") + checked_item[0] + __("' is: #########"));
    //         }
    //         else {
    //             frappe.msgprint({
    //                 "message" : __("Select only one row!"),
    //                 "indicator" : "red"
    //             });
    //         }
    //     });
    // }

    // listview.page.add_action_item('Test Action Item', function () {
    //     frappe.msgprint("action_item");
    // });

    // listview.page.add_menu_item(__("Test Menu Item"), function () {
    //     frappe.msgprint("menu_item");
    // });

    // var method = "psa.psa.doctype.Withdrawal Request.Withdrawal Request.set_multiple_status";

    // listview.page.add_menu_item(__("Set as Closed"), function () {
    //     listview.call_for_selected_items(method, { "status": "Closed" });
    // });
  },

  // before_render() {
  //     frappe.msgprint("before_render");
  // },

  // primary_action() {
  //     frappe.msgprint("primary_action");
  // },

  // button: {
  //     show(doc) {
  //         return doc.name;
  //     },
  //     get_label() {
  //         return 'Test Button';
  //     },
  //     get_description(doc) {
  //         return __('Test Description ') + doc.name + ", " + doc.status
  //     },
  //     action(doc) {
  //         frappe.msgprint("Test Button");
  //         // frappe.set_route('Form', doc.reference_type, doc.reference_name);
  //     }
  // }
};
