$fn = 30;

rotate([-90,0,0]) {
	//translate([0,-16.75+.1,0])
	//rotate([0,0,-90])
	//import("servo-mount.stl");

	difference() {
		union() {
			rotate([90,0,90])
			linear_extrude(height = 5.75, center = false, convexity = 0)
			polygon(points=[[0,0],[0,11],[-5.75,11],[-16.75,3],[-16.75,0]]);
			
			translate([0,-16.75,0])
			cube([35,16.75,3]);
			
			translate([29.25,0,0])
			rotate([90,0,90])
			linear_extrude(height = 5.75, center = false, convexity = 0)
			polygon(points=[[0,0],[0,11],[-5.75,11],[-16.75,3],[-16.75,0]]);
			
			translate([0,-16.75,-10])
			cube([7.5,16.75,11]);
			
			translate([27.5,-16.75,-10])
			cube([7.5,16.75,11]);
		
			translate([7.5,-16.75-15,0])
			cube([20,16.75+15,3]);
		}
	
		color("grey")
		translate([3.2 + 0.5,.1,9.25])
		rotate([90,0,0])
		cylinder(h = 5, d = 1.8);
		
		color("grey")
		translate([35 - 3.2 - 0.5,.1,9.25])
		rotate([90,0,0])
		cylinder(h = 5, d = 1.8);
	
		color("red")
		translate([35/2,-16.75-7.5,-1])
		cylinder(h = 5, d = 5.3);
	}
}