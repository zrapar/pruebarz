@extends('common.app')

@section('meta-css')
@include('user.metacss')
@endsection

@section('contenido')
    @include('admin.hola')
@endsection

@section('meta-js')
@include('user.metajs')
@endsection