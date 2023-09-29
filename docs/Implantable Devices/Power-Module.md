---
sidebar_position: 1
---

# Power Module

The control hub of our flagship product

## Product Description

![NNP Device](./img/nnp.jpg)
The Power Module (PM1) is an implanted module that has two key functions.  First, the PM1 houses the rechargeable Li-ion power supply for the entire NNP implanted system, along with the required recharging link and circuitry.  Second, the PM1 contains the wireless MedRadio link for transcutaneous communication and system programming.  The PM1 connects to the network through the Network Segment Cable (NC2).  The PM1 places power onto the network cable for distribution to all remote modules.

The PM1 is designed for easy surgical replacement, and replacement of the PM1 is an anticipated and expected event based on the eventual depletion of the Li-ion batteries.  PM1 replacement is accomplished through a single small incision, disconnection of the network segment connection, and replacement with a new PM1.  This procedure is expected to be an outpatient procedure requiring less than 30 minutes.

The PM1 is designed to be implanted in the torso, typically either chest or abdomen, because these portions of the body can accommodate the PM1 package size.  This location also allows convenient access for recharging through an inductive link, and easy surgical exposure for replacement.

The PM1 contains a magnetically activated switch for emergency shut-down of the entire NNP system.  This switch implements a failsafe shutdown function that will de-energize all of the power module circuitry in the presence of a strong, static magnetic field.  Details of this failsafe mode are described in APP-DES-FSAFE.

The PM1 utilizes a 32 bit ARM-7 microprocessor, the NXP Semiconductor LPC2129 processor.  The processor runs a real time operating system (RTOS), as described in APP-DES-PM1-SOFT.

During functional operation, the PM1 primarily functions as the power source for the entire implanted NNP system.  However, due to the significant processing power contained in the PM1, it is capable of performing signal processing and data storage in support of the remote module functions when required.  The PM1 is always active (except under the emergency shut-down condition), but can be placed into and taken out of a low-power  ‘sleep’ mode by the user.

The PM1 has a Ti case with feedthroughs for the network connections and antenna wire.  An epoxy header holds the connections and antenna.  A polymer nest inside the case holds the batteries and circuitry in place.  The coil for inductive battery recharging surrounds the circuitry inside the case.  Three identical Li-ion rechargeable cells are connected in parallel to provide the NNP system power.