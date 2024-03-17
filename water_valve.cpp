// water_valve.cpp
#include "water_valve.h"
#include "pinconfig.h"
#include <Arduino.h>

void WaterValve::begin()
{
    pinMode(RELAY_PIN_VALVE, OUTPUT);
    digitalWrite(RELAY_PIN_VALVE, LOW); // initially off
}

void WaterValve::open()
{
    digitalWrite(RELAY_PIN_VALVE, HIGH);
}

void WaterValve::close()
{
    digitalWrite(RELAY_PIN_VALVE, LOW);
}
