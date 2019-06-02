class grass extends LivingCreature{

    mul() {
        this.multiply++;
        if (this.multiply == 3) {


            let fundCords = this.getDirections(0);
            let cord = random(fundCords);
            if (cord) {
                let x = cord[0];
                let y = cord[1];

                let norXot = new Grass(x, y, this.index);
                xotArr.push(norXot);

                matrix[y][x] = 1;
                this.multiply = 0;
            }
        }
    }



}




