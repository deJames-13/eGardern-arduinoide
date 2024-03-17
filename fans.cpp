// fan.cpp
#include "fans.h"
#include "pinconfig.h"
#include <Arduino.h>

void Fan::begin()
{
    pinMode(RELAY_PIN_FAN, OUTPUT);
    digitalWrite(RELAY_PIN_FAN, LOW); // initially off
}

void Fan::turnOn()
{
    digitalWrite(RELAY_PIN_FAN, HIGH);
}

void Fan::turnOff()
{
    digitalWrite(RELAY_PIN_FAN, LOW);
}
