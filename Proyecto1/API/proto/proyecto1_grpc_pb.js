// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var proto_proyecto1_pb = require('../proto/proyecto1_pb.js');

function serialize_proyecto1_Asistencia(arg) {
  if (!(arg instanceof proto_proyecto1_pb.Asistencia)) {
    throw new Error('Expected argument of type proyecto1.Asistencia');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proyecto1_Asistencia(buffer_arg) {
  return proto_proyecto1_pb.Asistencia.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proyecto1_AsistenciaRecibido(arg) {
  if (!(arg instanceof proto_proyecto1_pb.AsistenciaRecibido)) {
    throw new Error('Expected argument of type proyecto1.AsistenciaRecibido');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proyecto1_AsistenciaRecibido(buffer_arg) {
  return proto_proyecto1_pb.AsistenciaRecibido.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proyecto1_ListaAsistencia(arg) {
  if (!(arg instanceof proto_proyecto1_pb.ListaAsistencia)) {
    throw new Error('Expected argument of type proyecto1.ListaAsistencia');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proyecto1_ListaAsistencia(buffer_arg) {
  return proto_proyecto1_pb.ListaAsistencia.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proyecto1_ListaReportes(arg) {
  if (!(arg instanceof proto_proyecto1_pb.ListaReportes)) {
    throw new Error('Expected argument of type proyecto1.ListaReportes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proyecto1_ListaReportes(buffer_arg) {
  return proto_proyecto1_pb.ListaReportes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proyecto1_ParamLista(arg) {
  if (!(arg instanceof proto_proyecto1_pb.ParamLista)) {
    throw new Error('Expected argument of type proyecto1.ParamLista');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proyecto1_ParamLista(buffer_arg) {
  return proto_proyecto1_pb.ParamLista.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proyecto1_Reporte(arg) {
  if (!(arg instanceof proto_proyecto1_pb.Reporte)) {
    throw new Error('Expected argument of type proyecto1.Reporte');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proyecto1_Reporte(buffer_arg) {
  return proto_proyecto1_pb.Reporte.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proyecto1_ReporteRecibido(arg) {
  if (!(arg instanceof proto_proyecto1_pb.ReporteRecibido)) {
    throw new Error('Expected argument of type proyecto1.ReporteRecibido');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proyecto1_ReporteRecibido(buffer_arg) {
  return proto_proyecto1_pb.ReporteRecibido.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proyecto1_StatusReq(arg) {
  if (!(arg instanceof proto_proyecto1_pb.StatusReq)) {
    throw new Error('Expected argument of type proyecto1.StatusReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proyecto1_StatusReq(buffer_arg) {
  return proto_proyecto1_pb.StatusReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proyecto1_StatusRes(arg) {
  if (!(arg instanceof proto_proyecto1_pb.StatusRes)) {
    throw new Error('Expected argument of type proyecto1.StatusRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proyecto1_StatusRes(buffer_arg) {
  return proto_proyecto1_pb.StatusRes.deserializeBinary(new Uint8Array(buffer_arg));
}


var proyecto1Service = exports.proyecto1Service = {
  // Respuesta
status: {
    path: '/proyecto1.proyecto1/Status',
    requestStream: false,
    responseStream: false,
    requestType: proto_proyecto1_pb.StatusReq,
    responseType: proto_proyecto1_pb.StatusRes,
    requestSerialize: serialize_proyecto1_StatusReq,
    requestDeserialize: deserialize_proyecto1_StatusReq,
    responseSerialize: serialize_proyecto1_StatusRes,
    responseDeserialize: deserialize_proyecto1_StatusRes,
  },
  // Crear Reporte
crearReporte: {
    path: '/proyecto1.proyecto1/CrearReporte',
    requestStream: false,
    responseStream: false,
    requestType: proto_proyecto1_pb.Reporte,
    responseType: proto_proyecto1_pb.ReporteRecibido,
    requestSerialize: serialize_proyecto1_Reporte,
    requestDeserialize: deserialize_proyecto1_Reporte,
    responseSerialize: serialize_proyecto1_ReporteRecibido,
    responseDeserialize: deserialize_proyecto1_ReporteRecibido,
  },
  // Listar Reportes
listarReportes: {
    path: '/proyecto1.proyecto1/ListarReportes',
    requestStream: false,
    responseStream: false,
    requestType: proto_proyecto1_pb.ParamLista,
    responseType: proto_proyecto1_pb.ListaReportes,
    requestSerialize: serialize_proyecto1_ParamLista,
    requestDeserialize: deserialize_proyecto1_ParamLista,
    responseSerialize: serialize_proyecto1_ListaReportes,
    responseDeserialize: deserialize_proyecto1_ListaReportes,
  },
  // Asitencia Reportes
crearAsistencia: {
    path: '/proyecto1.proyecto1/CrearAsistencia',
    requestStream: false,
    responseStream: false,
    requestType: proto_proyecto1_pb.Asistencia,
    responseType: proto_proyecto1_pb.AsistenciaRecibido,
    requestSerialize: serialize_proyecto1_Asistencia,
    requestDeserialize: deserialize_proyecto1_Asistencia,
    responseSerialize: serialize_proyecto1_AsistenciaRecibido,
    responseDeserialize: deserialize_proyecto1_AsistenciaRecibido,
  },
  // Lista asistencia
listarAsistencias: {
    path: '/proyecto1.proyecto1/ListarAsistencias',
    requestStream: false,
    responseStream: false,
    requestType: proto_proyecto1_pb.ParamLista,
    responseType: proto_proyecto1_pb.ListaAsistencia,
    requestSerialize: serialize_proyecto1_ParamLista,
    requestDeserialize: deserialize_proyecto1_ParamLista,
    responseSerialize: serialize_proyecto1_ListaAsistencia,
    responseDeserialize: deserialize_proyecto1_ListaAsistencia,
  },
};

exports.proyecto1Client = grpc.makeGenericClientConstructor(proyecto1Service);
