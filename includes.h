#ifndef INCLUDES_H
#define INCLUDES_H

// CONFIG FILES
#include "pin_config.h"
#include "db_config.h"
#include "wifi_config.h"

// Include necessary libraries
#include <Arduino.h>
#include <SPI.h>
#include <WiFi.h>

// SENSORS
#include "dhtu_sensor.h" // new
#include "soil_moisture.h"
#include "water_level.h"

// OUTPUTS
#include "buzzer.h"
#include "fans.h"
#include "water_valve.h"

// DISPLAY
#include "oled.h"

// WEB SERVICE
#include "web_server.h"
#include "network_manager.h"
#include "database_manager.h"

#endif
