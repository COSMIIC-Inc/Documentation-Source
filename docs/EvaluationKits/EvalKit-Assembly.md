---
sidebar_position: 2
---

# Evaluation Kits Assembly Steps

BYO-EK (build your own eval kit)

---

## Biopotential Amplifier (BP) Eval Assembly

![](./img/fig1.png)

Figure 1: Top Side of Assembled BP Frame Board.

![](./img/fig2.png)

Figure 2: Bottom Side of Assembled BP Frame Board.

![](./img/fig3.png)

Figure 3: Assembled BP Frame Board with BP Implant Board Connected

## Assembly Instructions
A particular order of assembly is not essential, but some components are easier to put on first. For most components on this list, it helps to tape the component down tightly so the board can be flipped over for soldering. All components are referenced by their number on the BOM for this board which can be seen in Figure 4 at the end of this document.

Components #10 and #11 are the inter-board connectors that will allow multiple Evaluation boards to stack together. The easiest way to assemble these is by using another Evaluation board as reference for proper alignment. If a previously assembled Evaluation board of any type (PM, PG, BP) is not available, then this board should be done carefully and used as a reference for any further boards in your stack to ensure they can all connect (stack) properly.

### Recommended Order of Assembly:

First to last by part number: 10/11, 4, 19, 9, 22, 20, 18, 24, 21(3x), 14, 13, 25, 18-1, 18-2, 29/30, 31(2x), 19-1

### Individual Notes on Assembly:

#10/11: These components should go on first as they are essential for the board stacking and communicating properly with other Evaluation Boards.

#### If you do not have an existing assembled Evaluation board:
Put all 4 connectors (2 #10 and 2 #11) through the Evaluation board so the male pins stick out of the top side (Figure 1). Lay the board down top side up so that it is propped up by the female ends of the 4 connectors. A flat surface will help during careful soldering to ensure alignment is not disturbed.

#### If you have an existing assembled Evaluation board:

Connect the female end of all 4 connectors (2 #10 and 2 #11) to your existing assembled Evaluation board.

Now take your new empty board and set it on top so that the male pins of all 4 connectors stick out on the top side of the board (Figure 1). This will allow you to easily solder the new connectors on from the top side of the board.

#### Next steps

#4: 2x2 right angle header. It’s important that the connector is fully seated and square to the board.

#19: Place connector with silver pins. The shorter gold pins should face up on the top side of the board.

#21: Place all 3 colors of this component on the board and tape down together for faster assembly.

#29/30/31: These components are screws and spacers for either spacing between two Evaluation board or for the implant board attachment.

The 3/16” screws are used to mount the implant board spacers onto the Evaluation board.

The 1/8” screws are used to screw the implant board into place from the top side. A F/F standoff (#30) is used for this.

The M/F (#29) standoff connects to a F/F (#30) standoff for the outer board spacers. The M/F standoff goes in from the bottom side of the board.

#19-1: This component is last in the assembly since it should be soldered to the actual implant board and not the Evaluation board. Connect the female end of this connector to the gold pins of connector #19.

After this is connected, the implant board can sit on the male pins of this connector and be secured into place by the four screws on top of spacers on the top side of the board.
See Figure 3 for example.

Once this is complete, this component can be soldered to the implant board.

![](./img/fig4.png)

Figure 4: Populated Board with BOM number references for components.