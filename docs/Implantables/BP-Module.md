---
sidebar_position: 3
---

# Biopotential Recording Module

The thing that takes in signals

---

## Product Description

Myoelectric	signals	(MES)	from	muscles	under	voluntary	control	are	recorded	by	the	
biopotential	recording module	(BP2).		The	BP2	is	designed	to	record	myoelectric	signals	
and	process	those	signals	for	the	purposes	of	neuroprosthetic	control.		The	BP2	can	record	
MES	from	two	different	muscles	and	process	the	signals	independently for	different	control	
needs.		
The	BP2	connects	to	the	same	myoelectric	recording	electrodes	that	have	been	utilized	
since	2003	at	the	Cleveland	FES	Center.		The	recording	electrodes	can	be	either	an	epimysial	
or	intramuscular	design	and	consist	of	two	metal	contacts	separated	by	1cm	for	differential	
recording.	
The	fundamental	principles	of	the	myoelectric	signal	processing	in	the	BP2	is	similar	to	the	
processing	in	our	current	generation	of	implanted	devices,	the	IST-12,	which	have	
demonstrated	excellent	functional	utility	[Kilgore	et	al.,	2008].		The	purpose	of	the	signal	
processing	is	to	generate	a	usable	control	signal	(or	signals)	from	the	biopotential	signal	
obtained	from	the	muscle.		The	processed	signal	can	either	be	used	as	a	direct	proportional	
control	signal,	such	as	the	signal	used	to control	grasp	opening	or	closing,	or	it	can	be	used	
as	a	logic	signal,	such	as	the	signal	used	to	switch	between	grasp	patterns.		Without	
appropriate	processing,	MES	tends	to	fluctuate	too	rapidly	for	practical	use	as	a	
neuroprosthetic	control.		Thus,	the primary	goal	of	the	signal	processing	is	to	produce	a	
smoothly	varying	and	stable	signal	without	significant	delay	between	the	generation	of	the	
MES	and	the	resultant	change	in	the	processed	signal.		
An	important	aspect	of	MES	acquisition	in	neuroprosthetics	is	the	need	to	account	for	the	
stimulus	artifact.		Electrical	stimulation	of	nearby	muscles	produces	large	artifacts	on	the	
MES	recording	that	can	completely	distort	the	signal	during	and	immediately	after	the	
stimulus	is	delivered.		The	BP2	can	use multiple	signal	processing	methods	to	maximize	the	
signal	quality	during	electrical	stimulation,	including	lowering	the	signal	gain	during	
stimulation	and	blanking	the	stimulus	artifact.
The	module	is	sized	small	enough	so	that	it	can	be	located	in	the	extremities,	near	the	
muscles	to	be	recorded	from.		This	has	the	advantage	of	reducing	the	lead	length,	improving the	signal	quality	and	minimizing	the	range	of	electrode	lead	lengths	that	need	to	be	
brought	into	surgery.	
The	BP2	is	connected	to	the	NNP network	through	a	single	network	cable.		The	BP2	gains	
power	from	the	network,	receives	data	from	the	network	that	to	determine	signal	
processing	parameters	and	other	administrative	functions,	and	places	two	channels	of	
processed	myoelectric	data	on	the	network	for	use	by	any	other	module	connected	to	the	
network.	The	BP2	has	four	total	network	connections,	allowing	a	single	BP2	to	branch	from	
a	single	network	input	to	network	output	to	three	additional	remote	modules.
The	BP2	has	internal	processing	based	on	the	AVR-core	processor	(Atmel	AT90CAN128).		
The	processing,	network	interface	and	powering	is	identical	to	the	PG4	module.	
Computational	processing	in	the	BP2	is	used	to	identify	relevant	network	data	and	perform	
the	signal	processing	on	the	recorded myoelectric	signal.		

## Coming soon...
Specifications, drawings, and test data are on their way