// FIXME: Check code compatibility and errors
#ifndef DHT22_H
#define DHT22_H

#include <DHT.h>
#include "pinconfig.h"

class DHT22SENSOR
{
public:
    DHT22SENSOR();
    void begin();
    float getTemperature();
    float getHumidity();

private:
    DHT dht;
};

#endif
