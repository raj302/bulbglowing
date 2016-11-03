import RPi.GPIO as GPIO
import time
import sys
GPIO.setmode(GPIO.BOARD)
GPIO.setwarnings(False)
GPIO.setup(16,GPIO.OUT)
while (True):
 try:
    GPIO.output(16,True)
    time.sleep(0.5)
    GPIO.output(16,False)
    time.sleep(0.5)
 except KeyboardInterrupt:
    GPIO.cleanup()
    sys.exit()
