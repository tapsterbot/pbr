$fn = 30;

length = 11;

height = 6;

union() {
	//translate([12.5+5,0,0])
	//cylinder(d=8, h=10);

	difference() {

        union() {
			//translate([12.5+5,0,0])
			//cylinder(d=8, h=10);

	hull() {
		translate([length+6,0,0])
		cylinder(d=8.1, h=height);

		translate([length+6,26,height/2])
    		rotate([90,0,0])
		cylinder(d=height, h=1);
	}	


			hull() {
			    translate([12.5+5,0,0])
			    cylinder(d=8, h=height);
			
			    cylinder(d=12, h=height);
			}
		}
	

		translate([0,0,1])
		hull() {
		    translate([14,0,0])
		    cylinder(d=4.5, h=4);
		
		    cylinder(d=7.5, h=12);
		}

		translate([8.5,0,-1])
		cylinder(d=2, h=10);

		//translate([0,0,-1])
		//cylinder(d = 6, h = 4);
	
		//translate([0,0,-.5])
		//cylinder(d = 2.5, h = 4);

		//translate([0,0,.75])
		//cylinder(d = 4.75, h = 4);
	
		translate([0,0,-.5])
		cylinder(d = 2.5, h = 4);

	}
}