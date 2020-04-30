$fn = 30;

union() {
	//translate([12.5+5,0,0])
	//cylinder(d=8, h=10);

	difference() {

        union() {
			translate([12.5+5,0,0])
			cylinder(d=8, h=10);
	
			hull() {
			    translate([12.5+5,0,0])
			    cylinder(d=8, h=3.75);
			
			    cylinder(d=12, h=3.75);
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