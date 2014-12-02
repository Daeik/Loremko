import sys
reload(sys)
sys.setdefaultencoding('utf-8')

maleFile = open("male.txt", "r")
femaleFile = open("female.txt", "r")

mm = open("male-middle.txt", "w")
ml = open("male-end.txt", "w")
fm = open("female-middle.txt", "w")
fl = open("female-end.txt", "w")

for line in maleFile:
	arr = unicode(line).split("	");
	arr.pop(0);
	for name in arr:
		mm.write(name[0] + " ")
		ml.write(name[1] + " ")

for line in femaleFile:
	arr = unicode(line).split("	");
	arr.pop(0);
	for name in arr:
		fm.write(name[0] + " ")
		fl.write(name[1] + " ")

mm.close()
ml.close()
fm.close()
fl.close()