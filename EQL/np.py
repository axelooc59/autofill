
import numpy as np 

np.random.seed(0)
A=np.random.randint(0,100,[10,5])


meanA=A.mean(axis=0)
print(meanA)
stdA=A.std(axis=0)
res=(A-meanA)/stdA

print(res)



