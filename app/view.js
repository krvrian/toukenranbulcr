(function(exports) {
  if (!exports.tohken) {
    exports.tohken = {};
  }
  return exports.tohken.view = {
    player: {
      "set": false,
      "name": null,
      "level": null,
	  "exp": null,
      "max_sword": null,
      "now_sword": null,
      "equip_max": null,
      "equip_now": null,
      "secretary": null,
      "secretary_serial_id": null,
      "max_party": null,
      "forge_slot": null,
      "repair_slot": null,
      "world": null,
      "created_at": null,
      "complete": {
      },
      "summary": {
      },
      "last_update": null
    },
    resource: {
      "set": false,
      "bill": null,
      "bonemeal": null,
      "charcoal": null,
      "steel": null,
      "coolant": null,
      "file": null,
      "max_resource": null,
      "money": null
    },
    party: {
      "set": false,
      "data": {}
    },
    equips: {
      "set": false,
      "data": {}
    }
  };
})(window);
