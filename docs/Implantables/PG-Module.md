---
sidebar_position: 2
---

# PG4 - Pulse Generator Module

4-channel IPG module

:link: **[Implantables-PulseGenerator-Hardware on COSMIIC GitHub](https://github.com/COSMIIC-Inc/Implantables-PulseGenerator-Hardware)**

---

## Component Overview

The four-channel pulse generator module (PG) is a remote module utilized for electrical stimulation of nerve and muscle tissue. The PG can deliver stimulation to four independent monopolar electrodes, using the metal case of the PG as the common return electrode. The PG is small enough to be located in the extremities, including the upper arm and forearm, thus minimizing electrode lead length and simplifying surgical lead routing. The PG is connected to the NNP network through a single network cable. The PG gains power from the network, receives data from the network that is utilized to determine the stimulation parameters that should be delivered, and places data on the network regarding its status. The PG has four total network connections, allowing a single PG to branch from a single network input to three network outputs.

![pulse](./img/pg.png)

---

## Technical Description

The PG has internal processing based on the AVR-core processor (Atmel AT90CAN128). Computational processing is used to identify relevant network data (typically control signal levels from the sensor module) and convert that data into the appropriate stimulus levels to each electrode based on pre-programmed patterns. These patterns are customized to provide the desired coordinated functional responses from each muscle and nerve. The PG combines three levels of failsafe mechanisms to assure that potentially damaging stimulation is not delivered: 1) hardware limits on total charge per pulse, 2) software limits on stimulation parameters, and 3) failsafe magnetic switches in both the PG and the power module.

---

## Documentation

### Mechanical Design Files and Drawings
All files and drawings for the design of the Biopotential Recording Module are available on the COSMIIC GitHub here:

:link: **[Implantables-PulseGenerator-Hardware/"Mechanical Design CAD Files" on COSMIIC GitHub](https://github.com/COSMIIC-Inc/Implantables-PulseGenerator-Hardware/tree/main/Mechanical%20Design%20CAD%20Files)**

## Coming soon...

Information on the module firmware, fabrication process, manufacturing partners, and how to obtain Pulse Generator Modules will be uploaded soon.