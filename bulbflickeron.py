import RPi.GPIO as GPIO
import time
import sys
def flick(a=1):
  a=1
  while (True):
    try:
      if ( a==1 ):
        GPIO.output(16,True)
        time.sleep(0.5)
        GPIO.output(16,False)
        time.sleep(0.5)
      if ( a==2 ):
        GPIO.cleanup()
        sys.exit()
    except KeyboardInterrupt:
       a=2
  return
GPIO.setmode(GPIO.BOARD)
GPIO.setwarnings(False)
GPIO.setup(16,GPIO.OUT)
flick()
GPIO.cleanup()
