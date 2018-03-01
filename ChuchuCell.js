var oop = require("@alu0100973914/oop");

class ChuchuCell extends oop.TCell {

	constructor(inner) {
		super(inner);
	}

  draw (width, height) {
    return this.getContent(width, height)
            .concat("Chuchu");
  }

}

oop.Registry.addMapClass('ChuchuCell', ChuchuCell);

module.exports = ChuchuCell
