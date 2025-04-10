---
sidebar_position: 1
---

# Evaluation Kits Overview

The basics of what an evaluation kit is and how you can use it

---

## Overview

A COSMIIC System evaluation kit is essential for you to test new features in software orfirmware, scope unique module orientations, or possibly create new modules. The evaluation kit is a custom-oriented system sitting on your benchtop that mirrors the function of an implantable COSMIIC System. Kits are essential for you to advance a project from (1) idea &rarr; (2) benchtop testing &rarr; (3) animal testing &rarr; (4) clinical feasibility. The open source COSMIIC System and evaluation kit give you the power and flexibility you need to develop your neuromodulation concepts.

## Structure

Let's get our vocabulary consistent: an "evaluation kit" consists of one or more "evaluation boards." An evaluation board represents the circuitry and function of one of the implantable module types&mdash;either the PM, PG4, or BP2 module. These boards can be stacked on top of each other, and with built-in network jumpers, are connected on the same physical network. Your stack of boards, or "kit" is based on the function you require (# of stim channels, # of recording channels). For example, if you need 8 channels of stimulation and 2 channels of recording, your kit should be assembled with a PM module, two PG4 modules, and one BP2 module. 

The current design of evaluation boards has two assembled components&mdash;a "frame board" and a module circuit board. Frame board is our term, akin to breakout board or board shield, for a circuit board that provides supplemental interface to the module circuit with a consistent form factor.  Fixing a delicate circuit board of an implantable module onto the frame board allows for easier handling and more points of diagnostic interaction with the board.

## Assembly

To understand how your eval kit was assembled or to build your own, refer to pages 

- [PM Eval Board](./PM-Eval-Board.md)
- [PG4 Eval Board](./PG4-Eval-Board.md)
- [BP2 Eval Board](./BP2-Eval-Board.md)