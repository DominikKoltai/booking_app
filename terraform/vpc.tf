resource "aws_vpc" "booking_app_vpc" {
  cidr_block           = "192.168.0.0/16"
  instance_tenancy     = "default"
  enable_dns_support   = "true"
  enable_dns_hostnames = "true"

  tags = {
    Name = "booking-app-vpc"
  }
}

resource "aws_subnet" "booking_app_subnet" {
  vpc_id                  = aws_vpc.booking_app_vpc.id
  cidr_block              = "192.168.0.0/24"
  map_public_ip_on_launch = "true"
  availability_zone       = "us-west-1a"

  tags = {
    Name = "booking-app-subnet"
  }
}

resource "aws_internet_gateway" "booking_app_gw" {
  vpc_id = aws_vpc.booking_app_vpc.id

  tags = {
    Name = "booking-app-gw"
  }
}

resource "aws_route_table" "booking_app_route_table" {
  vpc_id = aws_vpc.booking_app_vpc.id

  tags = {
    Name = "booking-app-route-table"
  }
}

resource "aws_route" "booking_app_internet_access" {
  route_table_id         = aws_route_table.booking_app_route_table.id
  destination_cidr_block = "0.0.0.0/0"
  gateway_id             = aws_internet_gateway.booking_app_gw.id
}

resource "aws_route_table_association" "booking_app_association" {
  subnet_id      = aws_subnet.booking_app_subnet.id
  route_table_id = aws_route_table.booking_app_route_table.id
}