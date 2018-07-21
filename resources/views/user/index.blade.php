@extends('common.app')

@section('meta-css')
@include('user.metacss')
@endsection

@section('contenido')
    @include('common.navbar')
    @include('user.lista')
    @include('user.producto')
    @include('user.pregunta')
    @include('common.footer')
@endsection

@section('meta-js')
    @if(isset($status))
    @include('partial.alert')
    @endif
@include('user.metajs')
@endsection