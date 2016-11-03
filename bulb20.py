import RPi.GPIO as GPIO
import time
GPIO.setwarnings(False)
GPIO.setmode(GPIO.BOARD)
GPIO.setup(8,GPIO.OUT)
GPIO.output(8,True)
white = GPIO.PWM(8,100)
white.start(100)
for i in range(0,21):
  white.ChangeDutyCycle(i)
  time.sleep(0.02)
  



     
     

