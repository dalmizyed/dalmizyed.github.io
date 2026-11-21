---
title: Wisconsin Autonomous Underwater Vehicles (WAUV)
order: 1
summary: As Mechanisms Lead for Wisconsin Autonomous Underwater Vehicles, I lead the design, prototyping, and testing of the vehicle’s gripper, torpedo launcher, and tag dropper mechanisms.
thumbnail: /assets/images/projects/wauvsubtest1.jpg
skills:
  - Mechanism design
  - Prototyping
  - Testing
  - System integration
details:
  - label: Role
    value: Mechanisms Lead
  - label: Team
    value: WAUV, UW–Madison
  - label: Term
    value: Jan. 2026 to present
  - label: Tools
    value: OnShape, 3D Printing, Soldering
results: []
documents: []
---

Wisconsin Autonomous Underwater Vehicles (WAUV) is a new engineering club at UW–Madison. We will compete in RoboSub in Irvine, California, in summer 2027, where our fully autonomous submarine must complete six tasks to earn the highest score. Three of those tasks (3, 4, and 5) need mechanisms.

As Mechanisms Lead, I design mechanisms myself and guide the design, prototyping, testing, and integration of all of them across a team of 15+ engineers.


| Task | What the AUV must do | Mechanism | What matters most |
| --- | --- | --- | --- |
| 3, Recon | Drop two markers into the correct bin | Marker dropper | Reliability and small size |
| 4, Deploy | Fire a torpedo through the correct opening | Torpedo launcher | Accuracy |
| 5, Restore | Pick up objects, surface in the right area, and place them in baskets | Gripper | Versatility and simplicity |


## Task 3, Recon: _Dropper Mechanism_

In Recon, the AUV drops markers into the correct bin, based on a role assigned at the start of the competition. Each team gets two markers, typically small steel balls. Placing a marker in the correct bin scores points, and placing one in each correct bin scores extra.

This is the simplest of the three mechanisms. A servo or solenoid holds both markers inside the dropper and releases them one at a time on command. Because the mechanism is simple, the design focus is reliability and a small form factor.

## Task 4, Deploy: _Torpedo Launcher_

In Deploy, the AUV fires a torpedo through an opening on a target board. Full points go only to a torpedo that travels all the way through the correct opening, which is set by a pre-assigned role, and firing from farther away earns extra points for accuracy. Teams may carry up to two torpedoes, and both must be preloaded before the run starts.

Our current launcher uses bungee cords to pull the torpedo forward and solenoids to hold it in place until we fire. The project combines mechanical design with dynamics analysis to keep the torpedoes accurate.

## Task 5, Restore: _Gripper_

In Restore, the AUV identifies and picks up objects, surfaces with them inside a specific area, and places them in the correct basket. Surfacing anywhere else disqualifies the run. Teams historically find this the hardest task, partly because the objects change every year and aren’t announced until shortly before the competition.

That uncertainty shapes the gripper. It has to handle the widest possible range of objects while staying simple and reliable, so that a mechanical failure can’t end a run. Some teams use full 6-DOF robot arms, and many use a simple horizontal gripper. Our approach is to build several different mechanisms that each run on a single stepper motor, so we can choose one at competition and hot-swap it in.

## My gripper design

Over the last semester, I designed my own gripper. Static load and stress calculations guided my decisions, and it can lift hand-sized objects up to 6 kg.

- Tendon-driven curling. The stepper motor spins pulleys that pull on tendon cables running through the inside of each of the two fingers. The tension curls the fingers closed, so they wrap around objects of many different shapes.
- Springs that open the fingers. Print-in-place springs at each finger joint apply a reaction torque that keeps the fingers open whenever the stepper isn’t pulling the tendons. This gives an on/off motion without any physical stops.
- TPU finger pads. Screwed onto each gripping surface, the pads grip well underwater and deform to match the object.
- Linkages between joints. They stop the fingers from deflecting forward or backward, so the springs allow only the curling motion and the fingers don’t fracture in use.

## Testing and results

We are in the process of shifting our attention more towards testing and validation of our mechanisms. I've been assisting with accuracy measurements for our two prototype torpedo launchers.

- To test accuracy, I purchased a fish tank to fire torpedoes in. The tank is 4ft in length, making it longer than the distance we hope to be firing from during the competition task. We record slow motion video from the side of the tank to see the distance travelled by the torpedo from the side or any vertical deviations, so we can better understand the cause of deviations. We also record from the front of the torpedo launcher to see where on a target it lands. We quantify accuracy based on deviation in X and Y coordinates from the center of the target.

## Next steps

I am planning to validate both the versatility and reliability of the gripper. I've designed two tests.

- For versatility, I am going to create or obtain various objects with differing geometries and materials. Each gripper design will be tested on every object 3-5 times, and we will record whether or not it was able to hold the object securely or not. An object will only be counted as held securely if the gripper can be shaken and the object will not come loose. Objects will be sorted into groups to get a good idea if some designs are versatile across the board, or are well specified for a specific group of shapes or materials. This will allow us to determine not only which grippers to use at competition, but what some of the weak points of each design are.
- For reliability, we will attach the gripper to a fixed stand, and run the motor in continuous open and close cycles for 48+ hours. A magnet attached to the gripper's moving parts will be paired with a stationary hall effect sensor. Each time the magnet passes the sensor, a cycle will be counted. This way, we can track the exact number of cycles until mechanical failure.
